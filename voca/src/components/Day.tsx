import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams<{day: string}>();
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setWords(data);
  //   })
  // }, [day]);

  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)

  return (
    <>
      <h4>Day {day}</h4>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}