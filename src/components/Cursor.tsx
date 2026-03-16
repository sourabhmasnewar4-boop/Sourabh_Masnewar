import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current;

    if (!cursor) return;

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const mouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", mouseMove);

    const animate = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;

        gsap.to(cursor, {
          x: cursorPos.x,
          y: cursorPos.y,
          duration: 0.1,
        });
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const elements = document.querySelectorAll<HTMLElement>("[data-cursor]");

    elements.forEach((element) => {
      element.addEventListener("mouseover", (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");

          gsap.to(cursor, {
            x: rect.left,
            y: rect.top,
            duration: 0.1,
          });

          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }

        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });

      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;