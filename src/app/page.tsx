'use client'

// import Image from 'next/image'
import React, { useEffect, useState } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'

export default function Home() {

  const [offset, setOffset]: any = useState(0);
  const [bgColor, setBgColor] = useState([0, 0, 0]);
  const rgbColor = [56, 80, 126];

  //BACKGROUND TRANSITION (BLACK TO RGB CHOICE)
  useEffect(() => {
    rgbColor.map((e, idx) => {
      let percent = ((rgbColor[idx] * 100) / rgbColor[0]);
      if (Math.floor(((window.scrollY / 10) * percent) / 100) > e) bgColor[idx] = e;
      else bgColor[idx] = (idx == 1 || idx == 2) ? Math.floor(((window.scrollY / 10) * percent) / 100) : Math.floor(window.scrollY / 10);
    })
    setOffset(window.scrollY)
    setBgColor(bgColor);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      rgbColor.map((e, idx) => {
        let percent = ((rgbColor[idx] * 100) / rgbColor[0]);
        if (Math.floor(((window.scrollY / 10) * percent) / 100) > e) bgColor[idx] = e;
        else bgColor[idx] = (idx == 1 || idx == 2) ? Math.floor(((window.scrollY / 10) * percent) / 100) : Math.floor(window.scrollY / 10);
      })
      setOffset(window.scrollY)
      setBgColor(bgColor);
    }
  });


  return (
    <main className={`bg-dark`} style={{ backgroundColor: `rgb(${bgColor})` }}>
      <Intro />
      <About />
      <Projects />
      <FixedItems offset={offset} />
    </main>
  )
}
