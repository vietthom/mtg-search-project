import Navbar from "@/components/navbar";
import SearchCard from "@/components/searchCard";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Magic: The Gathering Search Engine!</h1>
      <SearchBar />
      <SearchCard />
    </div>
  );
}
