import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MDBInput, MDBContainer } from "mdbreact";
import { addEvent } from "../store";
import { toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";

const AddEvent = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    location: "",
    participant: [],
    date: "",
    note: "",
    imageUrl: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [participant, setParticipant] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.note.length < 50) {
      swal(
        "Ooops",
        `You have to type ${
          50 - formData.note.length
        } characters left in the note field.`,
        "error"
      );
    } else if (formData.participant.length === 0) {
      swal(
        "Are you sure nobody comes to the event ?",
        "Please add Participant at least one person.",
        "error"
      );
    } else {
      dispatch(addEvent(formData));
      toast.success("Success add new Event", {
        position: "bottom-right",
      });
    }
  };

  const addParticipant = () => {
    if (participant) {
      setFormData({
        ...formData,
        participant: [...formData.participant, participant],
      });
    } else {
      swal("Ooops", "Put at least one letter!", "error");
    }
    setParticipant("");
  };
  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setFormData({ ...formData, title: value });
        break;
      case "location":
        setFormData({ ...formData, location: value });
        break;
      case "participant":
        setParticipant(value);
        break;
      case "date":
        setFormData({ ...formData, date: value });
        break;
      case "note":
        setFormData({ ...formData, note: value });
        break;
      case "imageUrl":
        console.log("value");
        setFormData({ ...formData, imageUrl: value });
        break;
    }
  };
  return (
    <div>
      <ToastContainer />
      <h3 className="mt-1 ms-2">Add Event</h3>
      <div className="container d-flex mt-3">
        <div
          className="col-6"
          style={{
            backgroundImage: `url("https://www.everypixel.com/i/covers/free/vector/business/meeting/cover.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <MDBContainer
          style={{ backgroundColor: `rgba(0, 0, 0, 0.01)` }}
          className=""
        >
          <form onSubmit={handleSubmit}>
            <MDBContainer className="d-flex flex-wrap justify-content-between">
              <MDBInput
                size="lg"
                name="title"
                label="Title"
                type="text"
                required
                onChange={handleChange}
              />
              <MDBInput
                size="lg"
                name="location"
                label="Location"
                type="text"
                required
                onChange={handleChange}
              />
              <MDBContainer className="m-0 p-0 col-6">
                <MDBInput
                  size="lg"
                  name="participant"
                  label="Participant"
                  type="text"
                  value={participant}
                  onChange={handleChange}
                />
                <MDBContainer className="d-flex p-0">
                  <button
                    type="button"
                    className="btn btn-primary m-0"
                    onClick={addParticipant}
                  >
                    Add
                  </button>
                  <div
                    className="ms-2 d-flex flex-wrap"
                    style={{
                      maxHeight: "46px",
                      overflow: "auto",
                      textOverflow: "elipsis",
                      wordWrap: "break-word",
                      whiteSpace: "no-wrap",
                    }}
                  >
                    {formData.participant.length !== 0 ? (
                      formData.participant.map((value, index) => (
                        <p className="rounded border border-success text-muted p-1 me-1">
                          {value}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted m-auto">*Min 1 person</p>
                    )}
                  </div>
                </MDBContainer>
              </MDBContainer>
              <MDBInput
                size="lg"
                name="date"
                style={{ width: "228px", height: "48px" }}
                type="date"
                required
                onChange={handleChange}
              />
            </MDBContainer>
            <MDBContainer>
              <MDBInput
                size="lg"
                className="mb-0"
                name="note"
                label="Note"
                type="textarea"
                minLength="50"
                outline
                onChange={handleChange}
              />
              {formData.note.length >= 50 ? null : (
                <p className="text-muted" style={{ marginTop: "-20px" }}>
                  *Please input {50 - formData.note.length} more characters.
                </p>
              )}
              <input
                type="file"
                name="imageUrl"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
              ></input>
            </MDBContainer>
            <button type="submit" className="btn btn-primary mt-4 ms-3">
              Submit
            </button>
          </form>
        </MDBContainer>
      </div>
    </div>
  );
};

export default AddEvent;
