"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
const testimonials = [
  {
    img: "/testimonials/img-1.png",
    massage:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veritatis placeat temporibus odit delectus quis perspiciatis illum id dolor ipsum, recusandae modi animi ipsa obcaecati enim officiis reprehenderit! Soluta eaque minus fugit nesciunt quaerat laborum nihil, placeat vel nemo illum?",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/testimonials/img-2.png",
    massage:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veritatis placeat temporibus odit delectus quis perspiciatis illum id dolor ipsum, recusandae modi animi ipsa obcaecati enim officiis reprehenderit! Soluta eaque minus fugit nesciunt quaerat laborum nihil, placeat vel nemo illum?",
    personName: "Robert Rene",
    location: "Singapore",
  },
];


const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonials.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    alt=""
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    className=" xl:flex hidden"
                  />
                  <div className=" flex-1 bg-white/20 text-white p-12">
                    <p className=" text-lg leading-9 mb-8">{slide.massage}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
