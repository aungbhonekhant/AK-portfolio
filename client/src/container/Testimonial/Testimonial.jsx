import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { secondaryBg } from "../../components/globelStyle";
import { TestimonialComponent } from "../../components";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrevSlide = () => {
    setcurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
    setDirection("prev");
  };

  const handleNextSlide = () => {
    setcurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
    setDirection("next");
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const tstmnl = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <TestimonialComponent.TstmnlItem>
            <TestimonialComponent.TstmlItemContainer
              key={currentIndex}
              initial={{
                visibility: "hidden",
                x: direction === "next" ? "100%" : "-100%",
              }}
              animate={{ visibility: "visible", x: "0%" }}
              exit={{
                visibility: "hidden",
                x: direction === "next" ? "-100%" : "100%",
              }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <img src={urlFor(tstmnl.image)} alt="testimonial" />
              <TestimonialComponent.TstmlContent>
                <TestimonialComponent.TstmlFeedBack>
                  {tstmnl.feedback}
                </TestimonialComponent.TstmlFeedBack>
                <TestimonialComponent.TstmlInfo>
                  <TestimonialComponent.TstmlName>
                    {tstmnl.name}
                  </TestimonialComponent.TstmlName>
                  <TestimonialComponent.TstmlCompany>
                    {tstmnl.company}
                  </TestimonialComponent.TstmlCompany>
                </TestimonialComponent.TstmlInfo>
              </TestimonialComponent.TstmlContent>
            </TestimonialComponent.TstmlItemContainer>
          </TestimonialComponent.TstmnlItem>

          <TestimonialComponent.TstmlBtns>
            <TestimonialComponent.TstmlBtnsItems onClick={handlePrevSlide}>
              <HiChevronLeft />
            </TestimonialComponent.TstmlBtnsItems>

            <TestimonialComponent.TstmlBtnsItems onClick={handleNextSlide}>
              <HiChevronRight />
            </TestimonialComponent.TstmlBtnsItems>
          </TestimonialComponent.TstmlBtns>
        </>
      )}
      <TestimonialComponent.Brands>
        {brands.map((brand) => (
          <TestimonialComponent.BrandItem
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </TestimonialComponent.BrandItem>
        ))}
      </TestimonialComponent.Brands>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, TestimonialComponent),
  "testimonials",
  secondaryBg
);
