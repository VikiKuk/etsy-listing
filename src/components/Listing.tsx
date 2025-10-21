import React from 'react'
import { Item } from './Item'
import { ItemType } from './types'

interface ListingProps {
  items: ItemType[]
}

export const Listing: React.FC<ListingProps> = ({ items }) => (
  <div className="item-list">
    {items.map((item) => (
      <Item key={item.listing_id} item={item} />
    ))}
  </div>
)