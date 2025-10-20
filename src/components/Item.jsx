export const Item = ({ item }) => {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;

  if (!MainImage || !MainImage.url_570xN) return null;

  const truncateTitle = (t) =>
    t.length > 50 ? t.slice(0, 50) + "…" : t;

  const getPrice = () => {
    switch (currency_code) {
      case "USD":
        return `$${price}`;
      case "EUR":
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const level =
    quantity <= 10
      ? "level-low"
      : quantity <= 20
      ? "level-medium"
      : "level-high";

  return (
    <div className="item" key={listing_id}>
      <div className="item-image">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{truncateTitle(title)}</p>
        <p className="item-price">{getPrice()}</p>
        <p className={`item-quantity ${level}`}>{quantity} left</p>
      </div>
    </div>
  );
};