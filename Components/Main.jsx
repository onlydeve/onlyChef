export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const listOfIngredients = ingredients.map((allIng) => {
    return <li>{allIng}</li>;
  });
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g manjo"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>
      <h1>Ingredient on hand:</h1>
      <ul>{listOfIngredients}</ul>
    </main>
  );
}
