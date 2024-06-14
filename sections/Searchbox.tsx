export default function Searchbox() {
  return (
    <div class="max-container-auto relative -top-14 page-content right" id="searchbox">
      <div class="bg-blue-900 text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">  
        <div class="flex-1">
          <label for="event" class="block text-sm font-medium">
            Procurar show
          </label>
          <input
            type="text"
            id="event"
            placeholder="Banda Dejavú"
            class="focus:outline-none p-4 mt-1 block w-full bg-blue-800 text-white border border-blue-700 rounded-md shadow-sm"
          />
        </div>
        <div class="flex-1">
          <label for="place" class="block text-sm font-medium">Local</label>
          <input
            type="text"
            id="place"
            placeholder="Ilhéus - Bahia"
            class="focus:outline-none p-4 mt-1 block w-full bg-blue-800 text-white border border-blue-700 rounded-md shadow-sm"
          />
        </div>
        <div class="flex-1">
          <label for="time" class="block text-sm font-medium">Data</label>
          <select
            id="time"
            class="focus:outline-none p-4 mt-1 block w-full bg-blue-800 text-white border border-blue-700 rounded-md shadow-sm"
          >
            <option>23 junho</option>
          </select>
        </div>
      </div>
    </div>
  );
}
