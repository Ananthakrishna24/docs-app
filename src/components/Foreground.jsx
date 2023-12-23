/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

function Foreground() {
  const sampleNotes = [
    {
      id: 1,
      title: "Finish the report for Project X",
      description: "The report for Project X is a critical task that requires your attention. This report summarizes the progress, findings...",
      timestamp: "Today at 4:45 pm",
      category: "Work"
    },
    {
      id: 2,
      title: "Submit the monthly sales",
      description: "The monthly sales analysis is a crucial report that provides a comprehensive overview of the sales performance...",
      timestamp: "Today at 6:00 pm",
      category: "Work"
    },
    {
      id: 3,
      title: "Grocery Shopping",
      description: "Remember to buy eggs, milk, bread, and cheese for the next week. Check the list for other items.",
      timestamp: "Today at 8:00 am",
      category: "Personal"
    },
    {
      id: 4,
      title: "Book Flight Tickets",
      description: "Search for the cheapest flights to Tokyo for the upcoming business trip in January.",
      timestamp: "Yesterday at 2:15 pm",
      category: "Travel"
    },
    {
      id: 5,
      title: "Yoga Class Enrollment",
      description: "Enroll in the new yoga class that starts next week. The class schedule is Monday and Thursday at 7 pm.",
      timestamp: "Dec 18 at 9:30 am",
      category: "Health"
    },
    {
      id: 6,
      title: "Read 'Atomic Habits'",
      description: "Start reading 'Atomic Habits' by James Clear to develop better productivity habits and routines.",
      timestamp: "Dec 20 at 5:45 pm",
      category: "Reading"
    }
  ];
  
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full overflow-auto pt-15 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleNotes.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            description={note.description}
            timestamp={note.timestamp}
            category={note.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
