import React from 'react'
import { ItemType } from './types'

interface ItemProps {
  item: ItemType
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    listing_id,
    url,
    MainImage,
    title = 'No title',
    currency_code = '',
    price = '',
    quantity = 0
  } = item

  if (!MainImage?.url_570xN) return null

  const truncatedTitle = title.length > 50 ? `${title.slice(0, 50)}…` : title

  const formattedPrice =
    currency_code === 'USD'
      ? `$${price}`
      : currency_code === 'EUR'
      ? `€${price}`
      : `${price} ${currency_code}`

  const levelClass =
    quantity <= 10 ? 'level-low' : quantity <= 20 ? 'level-medium' : 'level-high'

  return (
    <div className="item" key={listing_id}>
      <div className="item-image">
        <a href={url ?? '#'} target="_blank" rel="noreferrer">
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{truncatedTitle}</p>
        <p className="item-price">{formattedPrice}</p>
        <p className={`item-quantity ${levelClass}`}>{quantity} left</p>
      </div>
    </div>
  )
}