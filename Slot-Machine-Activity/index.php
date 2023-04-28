<!DOCTYPE html>
<html>
<head>
	<title>Slot Machine </title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<div class="card">
					<div class="card-body">
						<div class="row justify-content-center">
							<div class="col-md-3 slot" id="one"></div>
							<div class="col-md-3 slot" id="two"></div>
							<div class="col-md-3 slot" id="three"></div>
						</div>
						<div class="row justify-content-center mt-3">
							<div class="col-md-6">
								<div class="row justify-content-center">
									<div class="col-md-6">
										<p>Coins: <span id="coins">20</span></p>
									</div>
									<div class="col-md-6">
										<p>Place your bet:  <span id="bet">1</span></p>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-md-6">
										<input type="range" min="1" max="10" value="1" step="1" id="bet-slider" onchange="updateBet()">
									</div>
									<div class="col-md-6">
										<button class="btn btn-primary" onclick="spin()">Spin</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row justify-content-center mt-3">
							<div class="col-md-6">
								<div class="alert alert-success" role="alert" id="result"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="script.js"></script>
</body>
</html>
