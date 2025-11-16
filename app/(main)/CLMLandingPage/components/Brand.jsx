export default function Brand() {
  const brands = [
    {
      name: 'ManyChats',
      logo: '/images/manychat.png',
    },
    {
      name: 'Fuelchats',
      logo: '/images/fuelchat.png',
    },
    {
      name: 'WATI',
      logo: '/images/wati.png',
    },
    {
      name: 'Haptic',
      logo: '/images/haptic.png',
    },
    {
      name: 'Interkat',
      logo: '/images/interkat.png',
    },
    {
      name: 'Landbot',
      logo: '/images/landbot.png',
    },
  ];

  return (
    <section className="w-full flex justify-center py-8 px-4">
      <div
        className="
          flex flex-wrap items-center justify-center gap-3 sm:gap-4
          bg-indigo-50/40 rounded-full px-5 py-3
          shadow-sm
        "
      >
        {/* Label */}
        <span className="font-semibold text-indigo-900 whitespace-nowrap">
          Replaces
        </span>

        {/* Logos */}
        {brands.map((b) => (
          <div
            key={b.name}
            className="
              flex items-center gap-2 bg-white border border-gray-100
              rounded-full px-3.5 py-1.5 shadow-sm
              hover:shadow-md transition
              text-gray-700 text-sm font-medium
            "
          >
            <img
              src={b.logo}
              alt={b.name}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}