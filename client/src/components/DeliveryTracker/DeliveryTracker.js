import React from 'react'
import style from './DeliveryTracker.module.css'

function DeliveryTracker ({ status }) {
  return (
    <div className={style.container}>
      {status === 'PENDIENTE' &&
        <ol className={style.progressbar}>
          <li className={style.active}>Pendiente</li>
          <li>Enviado</li>
          <li>Recibido</li>
        </ol>}
      {status === 'ENVIADO' &&
        <ol className={style.progressbar}>
          <li className={style.active}>Pendiente</li>
          <li className={style.active}>Enviado</li>
          <li>Recibido</li>
        </ol>}
      {status === 'RECIBIDO' &&
        <ol className={style.progressbar}>
          <li className={style.active}>Pendiente</li>
          <li className={style.active}>Enviado</li>
          <li className={style.active}>Recibido</li>
        </ol>}
    </div>
  )
}

export default DeliveryTracker
