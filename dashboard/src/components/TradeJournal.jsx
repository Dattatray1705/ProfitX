import { useState, useEffect } from "react";
import axios from "axios";
import "./TradeJournal.css";

function TradeJournal() {
  const [journals, setJournals] =
    useState([]);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/journal",
        {
          withCredentials: true,
        }
      );

      setJournals(res.data);

    } catch (err) {
      console.log(err);
    }
  };
const deleteJournal = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/journal/${id}`,
      {
        withCredentials: true,
      }
    );

    setJournals(
      journals.filter(
        (journal) => journal._id !== id
      )
    );

  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="trade-journal-page">

      <h1 className="trade-journal-title">
        📒 Trading Journal
      </h1>

      <div className="journal-list">

        <h2>📚 My Trading Notes</h2>

        {journals.length === 0 ? (
          <p>
            No Journal Entries Yet
          </p>
        ) : (
          journals.map((journal) => (
            <div
              key={journal._id}
              className="journal-card"
            >
   <span
  className="journal-delete"
  onClick={() => {
    if (
      window.confirm(
        "Delete this journal?"
      )
    ) {
      deleteJournal(journal._id);
    }
  }}
>
  ✖
</span>

              <h3>
                📈 {journal.stockName}
              </h3>

              <p>
                <strong>
                  Why Bought:
                </strong>
                <br />
                {journal.reason}
              </p>

              <p>
                <strong>
                  Analysis:
                </strong>
                <br />
                {journal.analysis}
              </p>

              <p>
                🎯 Target Price:
                ₹{journal.targetPrice}
              </p>

              <p>
                ⏳ Holding Period:
                {" "}
                {journal.holdingPeriod}
              </p>

              <small>
                {new Date(
                  journal.createdAt
                ).toLocaleDateString()}
              </small>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default TradeJournal;