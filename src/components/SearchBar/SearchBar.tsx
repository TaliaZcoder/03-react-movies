import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;


    

    if (!query.trim()) {
      alert("Please enter your search query.");
      return;
    }

    onSubmit(query);
    
  };

  return (
    <header className={css.header}>
      <form className={css.form} action={handleSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}