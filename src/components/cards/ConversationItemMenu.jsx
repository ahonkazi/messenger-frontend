import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { GoBlocked } from "react-icons/go";
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleConversationMenu } from '@/redux/features/theme/ThemeSlice';
const ConversationItemMenu = ({ opened, position = 'bottom', y = 150 }) => {
  let topVal = 150;
  if (position === 'bottom') {
    if (y == 0) {
      topVal = y + 25 + 150
    } else {
      topVal = y + 25

    }
  } else {
    topVal = y + 25 - 230;
  }

  const dispatch = useDispatch()
  let styles = { overflow: 'clip', top: `${topVal}px`, transformOrigin: 'top right' }
  if (position === 'bottom') {
    styles = { overflow: 'clip', top: `${topVal}px`, transformOrigin: 'top right' }
  } else {
    styles = { overflow: 'clip', bottom: `${topVal + 225}px`, transformOrigin: 'bottom left' }
  }
  return (
    <AnimatePresence>
      {
        opened && (
          <motion.div style={styles} initial={{ height: 0, width: 0 }} animate={{ height: 'auto', width: 'auto' }} exit={{ height: 0, width: 0 }} className="fixed  left-[385px] z-[100]">
            <div className={` py-2  rounded-md ${position === 'bottom' ? 'rounded-tl-none' : 'rounded-bl-none '} shadow-lg w-56 bg-base-200`}>
              <ul className="menu  w-full rounded-box">
                <li onClick={() => dispatch(toggleConversationMenu({ id: 0 }))}>
                  <button>
                    <FaRegUserCircle className='text-lg' />
                    View Profile
                  </button>
                </li>
                <li onClick={() => dispatch(toggleConversationMenu({ id: 0 }))}>
                  <button>
                    <FaCheck />
                    Mark as unread
                  </button>
                </li>

                <li onClick={() => dispatch(toggleConversationMenu({ id: 0 }))}>
                  <button>
                    <GoBlocked className='text-lg' />
                    Block
                  </button>
                </li>
                <li onClick={() => dispatch(toggleConversationMenu({ id: 0 }))}>
                  <button>
                    <FiTrash className='text-lg' />
                    Delete Chat
                  </button>
                </li>


              </ul>

            </div>
          </motion.div>
        )
      }
    </AnimatePresence >
  )
}

export default ConversationItemMenu