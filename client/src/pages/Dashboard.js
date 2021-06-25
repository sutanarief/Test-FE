import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";
import { fetchEvent } from "../store";

const Dashboard = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState(
    {
      columns: [
        {
          label: "No",
          field: "number",
          sort: "",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "ID",
          },
        },
        {
          label: "Title",
          field: "title",
          sort: "",
          width: 150,
        },
        {
          label: "Location",
          field: "location",
          sort: "",
          width: 150,
        },
        {
          label: "Date",
          field: "date",
          sort: "",
          width: 150,
        },
        {
          label: "Participant",
          field: "participant",
          sort: "",
          width: 150,
        },
        {
          label: "Note",
          field: "note",
          sort: "",
          width: 150,
        },
      ],
    },
    {
      rows: [],
    }
  );

  useEffect(() => {
    dispatch(fetchEvent());
    if (events) {
      const formatData = events.map((val, i) => {
        const date = new Date(val.date).getDate();
        const month = new Date(val.date).toLocaleDateString("id", {
          month: "long",
        });
        const year = new Date(val.date).getFullYear();

        const dateFormat = `${date} ${month} ${year}`;
        const newData = {
          number: i + 1,
          title: val.title,
          location: val.location,
          date: dateFormat,
          participant: val.participant.join(", "),
          note: val.note,
        };
        console.log(dateFormat);
        return newData;
      });
      setDataTable({ ...dataTable, rows: formatData });
    }
  }, []);
  return (
    <div className="container mt-5 text-center">
      <MDBDataTableV5
        bordered
        hover
        entriesOptions={[5, 10, 15]}
        entries={5}
        pagesAmount={4}
        data={dataTable}
        pagingBottom
        striped="dark"
      />
    </div>
  );
};

export default Dashboard;
