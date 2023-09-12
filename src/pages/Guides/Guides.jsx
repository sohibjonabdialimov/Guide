import React from "react";

const Guides = () => {
  return (
    <>
     <table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Title</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Content</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Revisions</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
				
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border text-black border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>1</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>A</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>3-9</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<button className="bg-blue-500 w-4/5 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded">Edit</button>
					<button className="bg-red-500 w-4/5 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-500 rounded">Delete</button>
				</td>
				
			</tr>
			<tr className="bg-white text-black border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>2</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>B</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.@hotmail.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>5-7</td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<button className="w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded">Edit</button>
					<button className="w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-500 rounded">Delete</button>
				</td>
				
			</tr>
		
				
		</tbody>
	</table>
      
    </>
  );
};

export default Guides;
