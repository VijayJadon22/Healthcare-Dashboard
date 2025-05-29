import SimpleAppointmentCard from "./SimpleAppointmentCard"; // Importing the appointment card component

const UpcomingSchedule = () => {
  return (
    // Main container with background color, rounded corners, padding, and full width
    <div className="bg-white rounded-lg p-4 w-full">
      {/* Title of the section */}
      <h3 className="font-bold text-gray-800 mb-3">The Upcoming Schedule</h3>

      {/* Thursday's Schedule Section */}
      <div className="mb-4">
        {/* Header indicating the day */}
        <div className="text-xs text-gray-600 mb-2 font-semibold">
          On Thursday
        </div>

        {/* Appointment Cards for Thursday */}
        <div className="flex gap-3">
          <SimpleAppointmentCard
            title="Health checkup complete 💉" // Title of the appointment
            time="11:00 AM" // Scheduled time
            bgColor="bg-gray-100" // Background color of the card
            dotColor="bg-red-500" // Dot color indicating importance or type
          />
          <SimpleAppointmentCard
            title="Ophthalmologist 👁️"
            time="14:00 PM"
            bgColor="bg-purple-100"
            dotColor="bg-purple-500"
          />
        </div>
      </div>

      {/* Saturday's Schedule Section */}
      <div>
        {/* Header indicating the day */}
        <div className="text-xs text-gray-600 mb-2 font-semibold">
          On Saturday
        </div>

        {/* Appointment Cards for Saturday */}
        <div className="flex gap-3">
          <SimpleAppointmentCard
            title="Cardiologist ❤️"
            time="12:00 AM"
            bgColor="bg-red-50"
            dotColor="bg-red-500"
          />
          <SimpleAppointmentCard
            title="Neurologist 👨‍⚕️"
            time="16:00 PM"
            bgColor="bg-blue-50"
            dotColor="bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
