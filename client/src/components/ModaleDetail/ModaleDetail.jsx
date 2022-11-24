import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItemsDetails } from '../../store/actions/actions'
import Modal from 'react-bootstrap/Modal'
import s from './ModaleDetail.module.css'
import ItemModaleSales from '../ItemModaleSales/ItemModaleSales'

function ModaleDetail (props) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.itemsDetail)
  const [show, setShow] = useState(true)
  const showItems = () => {
    dispatch(getItemsDetails(props.buyId))
    handleChange()
  }
  const handleChange = () => setShow(!show)
  useEffect(() => {
    handleChange()
  }, [])

  return (
    <>
      <div className={s.button} type='button' onClick={showItems}>
        {props.buttonText}
      </div>
      <Modal className={s.container} show={show} onHide={handleChange}>
        <div className={s.modalBody}>

          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <div>
            {items?.map(item => {
              return <ItemModaleSales key={item.id} id={item.publicationId} title={item.title} name={item.name} price={item.price} count={item.countProducts} image={item.image} />
            })}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModaleDetail
