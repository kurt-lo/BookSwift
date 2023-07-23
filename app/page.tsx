import { getAll } from "@/api";
import AddBooks from "@/components/AddBooks";
import BooksList from "@/components/BooksList";

export default async function Home() {

  const books = await getAll()

  return (
    <main className="max-w-full mx-2">
      <AddBooks />
      <BooksList books={books} />
    </main>
  )
}
