import dinoData from '../helpers/data/data.js'
import { printDinosaurs } from '../helpers/utils.js';

const makeDino = () => {
	$("#add-dino").html(` 
	<div class="modal fade" id="dino-modal" tabindex="-1" role="dialog" aria-labelledby="add-dinosaur" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="add-dinosaur">Add Dinosaur</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="cart-items">
					<table class="table table-hover">
						<thead>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<div class="modal-body">
					<div id="error-message" style="color: red;"></div>
					<div>
					<label for="input-name">Name</label> : 
					<input class="form-control" id="name" type="text" placeholder="Name" aria-label="Name">
					</div
					<label for="input-type">Type</label> : 
					<input class="form-control mr-sm-2" id="type" type="text" placeholder="Type" aria-label="Type">
					<label for="input-owner">Owner</label> : 
					<input class="form-control mr-sm-2" id="owner" type="text" placeholder="Owner" aria-label="Owner">
					<label for="input-age">Age</label> :
					<input class="form-control mr-sm-2" id="age" type="number" placeholder="Age" aria-label="Age">
					<label for="input-image">Image URL</label> :
					<input class="form-control mr-sm-2" id="image" type="text" placeholder="Image URL" aria-label="Image URL">
					</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" id="submit">Add Dinosaur</button>
				</div>
			</div>
		</div>
	</div>
				<button class="btn btn-dark" data-toggle="modal" data-target="#dino-modal" id="">Add Dinosaur</button>
		</div>`)

		$('#submit').click(() => {
			let dino = {};
			let dinosaurs = dinoData.getDinosaurs();

			if ($(".form-control").val() !== '') {
				let name = $('#name').val();
				let image = $('#image').val();
				let owner = $('#owner').val();
				let type = $('#type').val();
				let age = $('#age').val();
		
				dino = {
					name: `${name}`,
					image: `${image}`,
					owner: `${owner}`,
					type: `${type}`,
					age: `${age}`,
					health: 100,
					isDead: false,
					adventures: []
				};

				$("#add-dino").html("");
				$(".modal-backdrop").remove();
				$("#add-dinosaur").modal("hide");
				dinosaurs.push(dino);
				printDinosaurs(dinosaurs);
			} else {
				$("#add-dino").html(alert("Please enter all fields"))
			}
		})
}

export { makeDino }
