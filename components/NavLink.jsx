"use client";

// import className from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const NavLink = ({ children, href, exact, activeClassName, ...props }) => {
    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    const classes = className(props.className, active && activeClassName);

    return (
        <Link href={href} {...props} className={classes}>
            {children}
        </Link>
    );
};

export default NavLink;