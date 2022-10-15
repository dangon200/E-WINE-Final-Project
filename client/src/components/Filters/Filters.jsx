import React from 'react'

function Filters ({ handleSort, handleFilterVarietal, handleFilterType, handleFilterOrigin }) {
  return (
    <div>
      <select onChange={e => handleSort(e)}>
        <option value=''> Ordernar </option>
        <option value='az'> A-Z </option>
        <option value='za'> Z-A </option>
        <option value='more'> Mayor Precio </option>
        <option value='less'> Menor Precio </option>
      </select>
      <select onChange={e => handleFilterVarietal(e)}>
        <option value=''> Varietal</option>
        <option value='Ancellotta'> Ancellotta</option>
        <option value='Blend'> Blend</option>
        <option value='Cabernet Franc'> Cabernet Franc</option>
        <option value='Cabernet Sauvignon'> Cabernet Sauvignon</option>
        <option value='Chardonnay'> Chardonnay</option>
        <option value='Chenin Blanc'> Chenin Blanc</option>
        <option value='Malbec'> Malbec</option>
        <option value='Malbec Rose'> Malbec Rose</option>
        <option value='Sangiovese'> Sangiovese</option>
        <option value='Merlot'> Merlot</option>
        <option value='Pinot Noir'> Pinot Noir</option>
        <option value='Petit Verdot'> Petit Verdot</option>
        <option value='Sauvignon Blanc'> Sauvignon Blanc</option>
        <option value='Semillon'> Semillon </option>
        <option value='Syrah'> Syrah</option>
        <option value='Tannat'> Tannat</option>
        <option value='Tempranillo'> Tempranillo</option>
        <option value='Torrontés'> Torrontés</option>
        <option value='Viognier'> Viognier</option>
      </select>
      <select onChange={e => handleFilterType(e)}>
        <option value=''> Tipo </option>
        <option value='Tinto'> tinto </option>
        <option value='Rojo'> tinto </option>
        <option value='Blanco'> Blanco </option>
        <option value='Rosado'> Rosado </option>
        <option value='Espumoso'> Espumoso </option>
      </select>
      <select onChange={e => handleFilterOrigin(e)}>
        <option value=''> Origen </option>
        <option value='Buenos Aires'> Buenos Aires </option>
        <option value='Catamarca'> Catamarca </option>
        <option value='Chubut'> Chubut </option>
        <option value='Chubut'> Chubut </option>
        <option value='Córdoba'> Córdoba </option>
        <option value='Corrientes'> Corrientes </option>
        <option value='Entre Ríos'> Entre Ríos</option>
        <option value='Formosa'> Formosa</option>
        <option value='Jujuy'> Jujuy</option>
        <option value='La Pampa'> La Pampa</option>
        <option value='La Rioja'> La Rioja </option>
        <option value='Mendoza'> Mendoza</option>
        <option value='Misiones'> Misiones </option>
        <option value='Neuquén'> Neuquén</option>
        <option value='Río Negro'> Río Negro</option>
        <option value='Salta'> Salta</option>
        <option value='San Juan'> San Juan</option>
        <option value='San Luis'> San Luis</option>
        <option value='Santa Cruz'> Santa Cruz</option>
        <option value='Santa Fe'> Santa Fe</option>
        <option value='Santiago del Estero'> Santiago del Estero </option>
        <option value='Tierra del Fuego'> Tierra del Fuego</option>
        <option value='Tucumán'> Tannat</option>
        <option value='Tempranillo'> Tucumán</option>
      </select>
    </div>
  )
}

export default Filters
