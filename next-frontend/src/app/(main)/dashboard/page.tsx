'use client';

import React from 'react';

const dummyArtists = [
  {
    id: 1,
    name: 'Aarav Mehta',
    category: 'Singer',
    location: 'Delhi',
    fee: 15000,
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    category: 'Makeup Artist',
    location: 'Mumbai',
    fee: 20000,
  },
  {
    id: 3,
    name: 'Rajiv Nair',
    category: 'DJ',
    location: 'Bangalore',
    fee: 18000,
  },
];

export default function ManagerDashboard() {
  return (
    <main className="py-28 px-4 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#174f46] mb-4">Manager Dashboard</h1>
      <p className="text-[#174f46] mb-6">List of all onboarded artists (dummy data).</p>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-[#dee4e3]">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#174f46] text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Fee</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-[#dee4e3] text-[#174f46]">
            {dummyArtists.map((artist) => (
              <tr key={artist.id} className="border-b border-[#b7f37b]">
                <td className="px-6 py-4">{artist.name}</td>
                <td className="px-6 py-4">{artist.category}</td>
                <td className="px-6 py-4">{artist.location}</td>
                <td className="px-6 py-4">₹{artist.fee.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <button className="px-4 py-2 rounded bg-[#b7f37b] text-[#174f46] font-semibold hover:bg-[#a3dd6e] transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
