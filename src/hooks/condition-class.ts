export const getTagClass = (tag: string) => {
    switch (tag) {
      case "urgent":
        return "tag-urgent";
      case "featured":
        return "tag-fea";
      case "full time":
        return "tag-normal";
      default:
        return "";
    }
  };

  
      //  [
      //   {
      //     tag: "urgent",
      //   },
      //   {
      //     tag: "featured",
      //   },
      //   {
      //     tag: "full time",
      //   },

      //  ]
  
  // use of tag class ==

  // const tagClass = getTagClass(item?.tag);

  // <span className={tagClass}>{item?.tag}</span>