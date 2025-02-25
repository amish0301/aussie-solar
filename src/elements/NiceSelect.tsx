import useGlobalContext from "@/hooks/use-context";
import { FormData, NiceSelectType } from "@/interFace/interFace";
import React, {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClickAway } from "react-use";

interface NiceSelectProps {
  options: NiceSelectType[];
  defaultCurrent: number;
  placeholder?: string;
  className?: string;
  isPopUpForm?: boolean;
  onChange: (
    item: NiceSelectType | NiceSelectType[],
    name: keyof FormData
  ) => void;
  name: keyof FormData;
  isService?: boolean;
}

const NiceSelect: React.FC<NiceSelectProps> = ({
  options,
  defaultCurrent,
  placeholder,
  className,
  isService,
  isPopUpForm,
  onChange,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false); // New state for positioning
  const { setNiceSelectData } = useGlobalContext();
  const [current, setCurrent] = useState<NiceSelectType>(
    options[defaultCurrent]
  );
  const [selectedService, setSelectedService] = useState<NiceSelectType[]>([]);

  const onClose = useCallback(() => {
    if (!isService) setOpen(false);
  }, [isService]);

  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, onClose);

  // Single Select Logic
  const handleSingleSelect = (item: NiceSelectType) => {
    setCurrent(item);
    onChange(item, name);
    setNiceSelectData(item?.option);
    onClose();
  };

  // Multi-Select Logic
  const handleMultiSelect = (item: NiceSelectType) => {
    setSelectedService((prevSelected) => {
      const alreadySelected = prevSelected.some(
        (service) => service.id === item.id
      );
      const updatedSelection = alreadySelected
        ? prevSelected.filter((service) => service.id !== item.id)
        : [...prevSelected, item]; // Add

      onChange(updatedSelection, name);
      setNiceSelectData(updatedSelection.map((s) => s.option));

      return updatedSelection;
    });
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (open) {
      const rect = ref.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect) {
        const spaceBelow = windowHeight - rect.bottom;
        const spaceAbove = rect.top;

        // If in popup form OR insufficient space below, open upwards
        setOpenUp(isPopUpForm || spaceBelow < 200);
      }
    }
  }, [open, isPopUpForm]);


  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  return (
    <div
    className={`nice-select ${className || ""} ${open ? "open" : ""} ${openUp ? "upward" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      ref={ref}
    >
      <span className="current">{current?.option || placeholder}</span>
      <ul
        className="list"
        role="menubar"
        onClick={stopPropagation}
        onKeyDown={stopPropagation}
      >
        {options?.map((item) => (
          <li
            key={item.id}
            data-value={item.id}
            className={`option ${
              item.id === current?.id ? "selected focus" : ""
            }`}
            role="menuitem"
            onClick={() =>
              isService ? handleMultiSelect(item) : handleSingleSelect(item)
            }
            onKeyDown={(e: KeyboardEvent<HTMLLIElement>) => {
              stopPropagation(e);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px",
            }}
          >
            {isService && item.id != 1 && (
              <input
                type="checkbox"
                checked={selectedService.some((s) => s.id === item.id)}
                onChange={() => handleMultiSelect(item)}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "16px",
                  height: "16px",
                  marginBlock: "auto",
                  cursor: "pointer",
                }}
              />
            )}
            <span>{item.option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
