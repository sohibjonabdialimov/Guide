import React from 'react'

const Table = () => {
  return (
    <table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Role</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Age</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Username</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Buttons</th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border text-black border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Username</span>Jahongir</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-white text-black border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Erwin Campbell</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>ecampbell088</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>ecampbell088@hotmail.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>318-685-X414</td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Username</span>Jahongir</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-gray-300 text-black border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Lillie Clark</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>lillie</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>lillie.clark@gmail.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>505-644-84X4</td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Username</span>Jahongir</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-white text-black border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Maribel Koch</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>maribelkoch</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>mkoch@yahoo.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-400-3X36</td>
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Username</span>Jahongir</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>			
		</tbody>
	</table>
  )
}

export default Table