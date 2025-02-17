"use client"
import React, { useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
const AboutMeSec = () => {

  const [isVisible1, setIsVisible1] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [isVisible4, setIsVisible4] = useState<boolean>(false);

  const circularRef = useRef(null);
 
  return (
    <>
      <section>
        <div className="container">
          <div className="team-about">
            <h3>About Me</h3>
            <p>
              we embody innovation in every photon. As engineers of solar solutions, {`we're`} dedicated to harnessing the boundless power of the sun to illuminate a sustainable future. Our expertise lies not only in designing state-of-the-art solar systems but in crafting bespoke solutions tailored to your specific needs.
              <br />
              With a fusion of cutting-edge technology and unwavering commitment, we engineer solutions that transcend mere functionality. From conceptualization to implementation, our team meticulously crafts each project, ensuring seamless integration and maximum efficiency. Whether {`it's`} a residential rooftop installation or a sprawling solar farm, we approach every endeavor with the same passion and precision.
              But {`we're`} more than just engineers; {`we're`} stewards of the environment. Our mission extends beyond simply meeting energy needs; {`it's`} about reducing carbon footprints and cultivating a greener tomorrow. By choosing Willimes Jessica, {`you're`} not just investing in solar power. {`you're`} investing in a brighter, cleaner future for generations to come
            </p>
            <ul className="custom-listing-stlyes">
              <li>
                <div className="bol"></div>Far curiosity incommode now led
                smallness allowance.
              </li>
              <li>
                <div className="bol"></div>Favour bed assure son things yet.
              </li>
              <li>
                <div className="bol"></div>She consisted consulted elsewhere
                happiness
              </li>
              <li>
                <div className="bol"></div>Disposing household any old the.
              </li>
              <li>
                <div className="bol"></div>Widow downs you new shade drift hopes
                small.
              </li>
              <li>
                <div className="bol"></div>Interested discretion estimating on
                stimulated.
              </li>
            </ul> 
            <div className="row mt-60 en-work-skills" ref={circularRef}>
              <div className="col-xl-6">
                <h3>Work Skills</h3>
                <div className="progresbar pt-4">
                  <div className="progressbar">
                    <div className="circle one">
                      <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible1(isVisible)}>
                          <CircularProgressbar
                           value={isVisible1 ? 25 : 0}
                           text={`${isVisible1 ? 25 : 0}%`}
                           strokeWidth={7}
                         
                          />
                      </VisibilitySensor>
                    </div>
                  </div>
                  <div className="progressbar">
                    <div className="circle two">
                    <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible2(isVisible)}>
                          <CircularProgressbar
                           value={isVisible2 ? 40 : 0}
                           text={`${isVisible2 ? 40 : 0}%`}
                           strokeWidth={7}
                         
                          />
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
                <div className="progresbar pt-4">
                  <div className="progressbar">
                    <div className="circle three">
                    <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible3(isVisible)}>
                          <CircularProgressbar
                           value={isVisible3 ? 51 : 0}
                           text={`${isVisible3 ? 51 : 0}%`}
                           strokeWidth={7}
                            
                          />
                      </VisibilitySensor>
                    </div>
                  </div>
                  <div className="progressbar">
                    <div className="circle for">
                    <VisibilitySensor onChange={(isVisible: boolean) => setIsVisible4(isVisible)}>
                          <CircularProgressbar
                           value={isVisible4 ? 90 : 0}
                           text={`${isVisible4 ? 90 : 0}%`}
                           strokeWidth={7}
                           
                          />
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="accordion">
                  <h3>Helpful Faq’s</h3>
                  <div className="tabs">
                    <div className="tab">
                      <input type="radio" id="rd1" name="rd" />
                      <label className="tab-label" htmlFor="rd1">
                        {" "}
                        Feed-in Tariff has closed?
                      </label>
                      <div className="tab-content">
                        Ut tellus dolor, dapibus eget, elementum ifend cursus
                        eleifend, elit. Aenea ifen dn tor wisi Aliquam er at
                        volutpat. Dui ac tui end cursus eleifendrpis. Ut tellus
                        dolor, dapibus eget, elementum ifend cursus eleifend,
                        elit.
                      </div>
                    </div>
                    <div className="tab">
                      <input type="radio" id="rd2" name="rd" />
                      <label className="tab-label" htmlFor="rd2">
                        Always in touch with the experts?
                      </label>
                      <div className="tab-content">
                        Ut tellus dolor, dapibus eget, elementum ifend cursus
                        eleifend, elit. Aenea ifen dn tor wisi Aliquam er at
                        volutpat. Dui ac tui end cursus eleifendrpis. Ut tellus
                        dolor, dapibus eget, elementum ifend cursus eleifend,
                        elit.
                      </div>
                    </div>
                    <div className="tab">
                      <input type="radio" id="rd3" name="rd" />
                      <label className="tab-label" htmlFor="rd3">
                        Energy is a smart, but long term commitment?
                      </label>
                      <div className="tab-content">
                        Ut tellus dolor, dapibus eget, elementum ifend cursus
                        eleifend, elit. Aenea ifen dn tor wisi Aliquam er at
                        volutpat. Dui ac tui end cursus eleifendrpis. Ut tellus
                        dolor, dapibus eget, elementum ifend cursus eleifend,
                        elit.
                      </div>
                    </div>
                    <div className="tab">
                      <input type="radio" id="rd4" name="rd" />
                      <label className="tab-label" htmlFor="rd4">
                        Where we’ve improved sustainability?
                      </label>
                      <div className="tab-content">
                        Ut tellus dolor, dapibus eget, elementum ifend cursus
                        eleifend, elit. Aenea ifen dn tor wisi Aliquam er at
                        volutpat. Dui ac tui end cursus eleifendrpis. Ut tellus
                        dolor, dapibus eget, elementum ifend cursus eleifend,
                        elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeSec;
