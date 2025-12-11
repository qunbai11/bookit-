// Sample room data
const rooms = [
  { id: 1, name: "Room A (2 seats)" },
  { id: 2, name: "Room B (4 seats)" },
  { id: 3, name: "Room C (6 seats)" }
];

let selectedRoom = null;

const dateInput = document.getElementById("date");
const timeSlotSelect = document.getElementById("time-slot");
const showRoomsBtn = document.getElementById("show-rooms-btn");
const roomsList = document.getElementById("rooms-list");
const roomsHint = document.getElementById("rooms-hint");

const bookingForm = document.getElementById("booking-form");
const selectedRoomText = document.getElementById("selected-room-text");
const nameInput = document.getElementById("name");
const studentIdInput = document.getElementById("student-id");
const nameError = document.getElementById("name-error");
const studentIdError = document.getElementById("student-id-error");
const confirmationDiv = document.getElementById("confirmation");

showRoomsBtn.addEventListener("click", () => {
  const date = dateInput.value;
  const timeSlot = timeSlotSelect.value;

  roomsList.innerHTML = "";
  selectedRoom = null;
  selectedRoomText.textContent = "No room selected yet.";
  confirmationDiv.textContent = "";
  roomsHint.textContent = "";

  if (!date || !timeSlot) {
    roomsHint.textContent = "Please select both a date and a time slot.";
    return;
  }

  rooms.forEach((room) => {
    const card = document.createElement("div");
    card.className = "room-card";

    const title = document.createElement("h3");
    title.textContent = room.name;
    card.appendChild(title);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Book this room";
    btn.addEventListener("click", () => {
      selectedRoom = room;
      selectedRoomText.textContent =
        `Selected: ${room.name}, ${date}, ${timeSlot}`;
      confirmationDiv.textContent = "";
    });

    card.appendChild(btn);
    roomsList.appendChild(card);
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous errors and confirmation
  nameError.textContent = "";
  studentIdError.textContent = "";
  confirmationDiv.textContent = "";

  if (!selectedRoom) {
    confirmationDiv.textContent = "Please select a room first.";
    return;
  }

  let hasError = false;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    hasError = true;
  }

  if (!studentIdInput.value.trim()) {
    studentIdError.textContent = "Student ID is required.";
    hasError = true;
  }

  if (hasError) {
    return;
  }

  confirmationDiv.textContent =
    `Booking confirmed for ${nameInput.value} in ${selectedRoom.name}.`;
});
