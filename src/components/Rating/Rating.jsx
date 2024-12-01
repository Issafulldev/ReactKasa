const Rating = ({ rating, maxStars = 5, colorStar, emptyStar }) => {
  // Création d'un tableau avec `maxStars` éléments
  const stars = Array(maxStars).fill();

  return (
    <div style={{ display: 'flex' }}>
      {stars.map((_, index) => (
        <img
          key={index}
          src={index < rating ? colorStar : emptyStar}
          alt={index < rating ? "filled star" : "empty star"}
          style={{ width: '24px', height: '24px', marginRight: '5px' }} // Style par défaut (personnalisable)
        />
      ))}
    </div>
  );
};

export default Rating;