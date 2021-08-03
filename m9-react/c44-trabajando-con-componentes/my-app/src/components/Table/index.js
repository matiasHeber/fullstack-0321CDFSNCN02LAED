import React from 'react';

const Table = () => {
    return (
        <>
            <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
			<div class="card shadow mb-4">
				<div class="card-body">
					<div class="table-responsive">
						<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Categories</th>
									<th>Colors</th>
									<th>Stock</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Tiger Nixon</td>
									<td>System Architect</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span class="text-danger">Red</span></li>
											<li><span class="text-primary">Blue</span></li>
											<li><span class="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
								<tr>
									<td>Jane Doe</td>
									<td>Fullstack developer</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span class="text-danger">Red</span></li>
											<li><span class="text-primary">Blue</span></li>
											<li><span class="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;