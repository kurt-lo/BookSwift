import { ChangesProps } from '@/types'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
//ETO YUNG MAG POP UP NA FORM OR SIMPLY THE MODAL
const Changes = ({ changesOpen, setChangeOpen, children }: ChangesProps) => {
  return (
    <div className={`modal ${changesOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <div className="modal-action m-0">
          <label
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setChangeOpen(false)}
          >
            <AiFillCloseCircle size={25}/>
          </label>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Changes