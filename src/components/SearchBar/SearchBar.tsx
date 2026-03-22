import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;

    if (!query.trim()) {
      alert("Please enter your search query.");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}