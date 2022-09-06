import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./styles.css";
export const Cards = ({ data, setData }) => {
  const [page, setPage] = useState(0);
  const [single, setSingle] = useState({});
  const count = useRef(0);
  let limit = 24;
  const handlePage = (val) => {
    setPage(page + val);
  };
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${limit}`
      )
      .then((response) => {
        setData(response.data);
        count.current = response.headers["x-total-count"];
      });
  }, [page]);
  const userFind = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  };
  return (
    <>
      <div className="cards">
        {data.map((e) => {
          return (
            <Card style={{ width: "18rem" }} key={e.id}>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/300x150/bababa/000000"
              />
              <Card.Body>
                <Card.Title>
                  {e.title}-{e.id}
                </Card.Title>
                <Card.Text>{e.body}</Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                className="btn-card"
                onClick={() => userFind(e.id)}
              >
                View User
              </Button>
            </Card>
          );
        })}
      </div>
      <button
        className="button-class"
        disabled={page <= 0}
        onClick={() => handlePage(-24)}
      >
        {"<<"}
      </button>
      {" -- "}
      <button
        className="button-class"
        disabled={page >= count.current - 5}
        onClick={() => handlePage(24)}
      >
        {">>"}
      </button>
    </>
  );
};
