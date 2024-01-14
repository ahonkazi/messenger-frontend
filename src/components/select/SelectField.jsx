"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { GrFormCheckmark } from "react-icons/gr"
import { FaRegEyeSlash } from "react-icons/fa"
import { IoEyeOutline } from "react-icons/io5"
import { MdChevronRight } from "react-icons/md"
import { BiCheck } from "react-icons/bi"
import { getCookie, setCookie } from "cookies-next"

export const SelectDefault = ({ data = [], label = 'label', fieldName = 'selectOffsetTop', selectedData = null, setSeletedData }) => {
    const [status, setStatus] = useState(false);
    const [selectTop, setSelectTop] = useState(false);
    const selectedItemRef = useRef()
    const selectRef = useRef()
    const lastRef = useRef()
    const ulRef = useRef()
    const [getY, setY] = useState(0)
    const scrollerRef = useRef()
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        setY(selectRef.current?.offsetTop)

    }, [])

    const getOffsetTop = (e) => {
        if (window.innerHeight - (getY - window.scrollY) < 260) {
            if ((getY + window.scrollY) > 170) {
                setSelectTop(true)
            } else {
                setSelectTop(false)
            }

        } else {
            setSelectTop(false)
        }
    }
    const handleSelect = (e, item) => {
        {
            setSeletedData(item);
            setSelectedItem(e.target.offsetTop);
            setCookie(fieldName, e.target.offsetTop)
            if (e.target.offsetTop) {
                setStatus(false);
            }
            setStatus(false);
        }
    }
    useEffect(() => {
        if (selectedData === null) {
            if (ulRef.current) {
                setCookie(fieldName, parseInt(ulRef.current.clientHeight / 2), { SameSite: true })

            }
        } else {
            if (selectedItemRef.current) {
                setCookie(fieldName, selectedItemRef.current.offsetTop - 100, { SameSite: true })

            }
        }

        if (selectedItemRef.current) {
            setSelectedItem(selectedItemRef.current.offsetTop - 100);
            scrollerRef.current.scrollTop = selectedItemRef.current.offsetTop - 100;
            setCookie(fieldName, selectedItemRef.current.offsetTop - 100, { SameSite: true })
        }
        scrollerRef.current.scrollTop = getCookie(fieldName);
        if (selectedItem) {
            scrollerRef.current.scrollTop = getCookie(fieldName);

        }

    }, [selectedItem, status])



    return (
        <div className="">
            <div ref={selectRef} className="input-item mt-2 relative">
                <button onClick={(e) => { setStatus(!status); getOffsetTop(e) }} type='button' className={`flex input input-bordered justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none text-sm md:text-base 2xl:text-lg w-full px-4 text-Gray`}><span >{selectedData ? selectedData : label}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
                <div ref={scrollerRef} style={{ scrollbarWidth: 'thin' }} className={`bg-transparent overflow-y-auto max-h-[200px] absolute z-[10] w-full bottom-full`}>

                    {
                        status && (
                            <ul ref={ulRef} className="menu flex flex-col bg-base-200  ">
                                {
                                    data?.map((item, index) =>
                                        <li ref={parseInt(item) === parseInt(selectedData) ? selectedItemRef : null} key={index} onClick={(e) => { handleSelect(e, item) }} className={`hover:bg-opacity-50 ${parseInt(selectedData) === parseInt(item) ? 'bg-base-300 rounded-lg' : ''} duration-200  `}>
                                            <p>{item}</p>
                                        </li>
                                    )

                                }
                            </ul>
                        )
                    }

                </div>
                <span ref={lastRef}></span>
            </div>
        </div >

    )
}
