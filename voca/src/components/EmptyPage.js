import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h3>잘못된 접근입니다.</h3>
      <Link to="/">돌아가기</Link>
    </>
  )
}