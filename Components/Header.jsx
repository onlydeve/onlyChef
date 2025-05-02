function mouseEnter() {
  console.log("mouse entered");
}

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          onMouseOver={mouseEnter}
          src="./images/chef-claude-icon.png"
          alt=""
        />
        <h3>OnlyChef</h3>
      </div>
    </header>
  );
}
