import React, { useState } from 'react';
import { UserPlus, UserCheck, Calendar, Clock, Award, Briefcase } from 'lucide-react';
import { volunteerTasks } from '../data/mockData';

const Volunteer: React.FC = () => {
  const [isVolunteering, setIsVolunteering] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const skillsList = [
    'First Aid',
    'CPR Certified',
    'Emergency Response',
    'Transportation',
    'Food Preparation',
    'Search and Rescue',
    'Language Translation',
    'Medical Professional',
    'Logistics',
    'Social Services'
  ];

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const availableTimeSlots = [
    'Morning (6AM-12PM)',
    'Afternoon (12PM-6PM)',
    'Evening (6PM-12AM)',
    'Night (12AM-6AM)'
  ];

  const handleToggleVolunteer = () => {
    setIsVolunteering(!isVolunteering);
  };

  const handleSkillChange = (skill: string) => {
    setSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleAvailabilityChange = (day: string) => {
    setAvailability(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleTimeSlotChange = (slot: string) => {
    setTimeSlots(prev =>
      prev.includes(slot)
        ? prev.filter(s => s !== slot)
        : [...prev, slot]
    );
  };

  return (
    <div className="max-w-6xl mx-auto fade-in">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Volunteer Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Volunteer Status</h2>
              <button
                onClick={handleToggleVolunteer}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  isVolunteering
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {isVolunteering ? (
                  <>
                    <UserCheck className="mr-2" size={20} />
                    Currently Volunteering
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2" size={20} />
                    Become a Volunteer
                  </>
                )}
              </button>
            </div>

            {isVolunteering && (
              <div className="space-y-6 fade-in">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                    <Award className="mr-2 text-blue-500" />
                    Skills & Certifications
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillsList.map((skill) => (
                      <label key={skill} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={skills.includes(skill)}
                          onChange={() => handleSkillChange(skill)}
                          className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                    <Calendar className="mr-2 text-green-500" />
                    Availability
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {daysOfWeek.map((day) => (
                      <label key={day} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={availability.includes(day)}
                          onChange={() => handleAvailabilityChange(day)}
                          className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                    <Clock className="mr-2 text-purple-500" />
                    Preferred Time Slots
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {availableTimeSlots.map((slot) => (
                      <label key={slot} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={timeSlots.includes(slot)}
                          onChange={() => handleTimeSlotChange(slot)}
                          className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-gray-700">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Briefcase className="mr-2 text-blue-500" />
              Available Tasks
            </h2>
            <div className="space-y-4">
              {volunteerTasks.map((task) => (
                <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-800">{task.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{task.location}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {task.requiredSkills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-gray-600">{task.timeSlot}</span>
                    <span className="text-blue-600">
                      {task.volunteers.registered}/{task.volunteers.required} volunteers
                    </span>
                  </div>
                  <button className="mt-3 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Sign Up
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;