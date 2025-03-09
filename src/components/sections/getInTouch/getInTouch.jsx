"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Button from "@/components/ui/button";
import Link from "next/link";

function GetInTouch() {
  return (
    <Container className="py-10">
      <div className="flex flex-col items-center justify-between gap-4 px-8 text-center">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 font-extralight">
            <span className="text-3xl text-white/90 md:text-4xl">
              Ready to Make Informed
            </span>
            <br />
            <span className="text-4xl font-bold text-secondary md:text-5xl">
              Decisions with Confidence?
            </span>
          </h2>
          <p className="mb-8 max-w-[27rem] text-center text-[1.2rem] text-white lg:max-w-[37rem]">
            At Stone Harp Analytics, we bring unparalleled expertise and
            cutting-edge intelligence solutions to your most critical
            challenges. Let's collaborate to achieve your mission goals with
            clarity, precision, and Timely insights.
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center">
          <h2 className="mb-6 font-extralight">
            <span className="text-3xl text-secondary md:text-4xl">
              Your next move starts here.
            </span>
            <br />
            <span className="text-3xl font-bold text-white md:text-5xl">
              Get in Touch Today
            </span>
          </h2>
        </div>

        <div className="flex w-full justify-center">
          <Button size="md" variant="secondary" className="group">
            <Link
              href="/contact"
              className="text-white group-hover:text-secondary"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default GetInTouch;
