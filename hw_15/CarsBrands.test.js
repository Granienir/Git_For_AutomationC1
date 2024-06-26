const { CarsController } = require("./CarsController");
const carsController = new CarsController();

describe("check Cars Api", () => {
  beforeAll(async () => {
    await carsController.login();
  });

  afterAll(async () => {
    const carsResponse = await carsController.getCars();
    const carIds = carsResponse.data.data.map((c) => c.id);
    for (const carId of carIds) {
      const del = await carsController.deleteCarById(carId);
    }
  });

  test("Get Cars Brands", async () => {
    const carsBrands = await carsController.getCarsBrands();
    //console.log(carsBrands.data.data);
    expect(carsBrands.status).toBe(200);
  });

  test("Get Cars Models", async () => {
    const carsModels = await carsController.getCarsModels();
    //console.log(carsModels.data.data);
    expect(carsModels.status).toBe(200);
  });

  test("Create a Cars for Model 1", async () => {
    const carsModels = await carsController.getCarsModels();
    const carModelList = [...carsModels.data.data];
    //console.log(carModelList);
    //console.log(carModelList.length);
    for (i = 0; i < carModelList.length; i++) {
      const newCarCreate = await carsController.createCar(
        carModelList[i].carBrandId,
        carModelList[i].id,
        i + 1 * 1000
      );
      //console.log();
      expect(newCarCreate.status).toBe(201);
    }
    expect(carsModels.status).toBe(200);
    //expect(newCarCreate.status).toBe(201);
  });

  test("Check that cars=carsModel", async () => {
    const carsModels = await carsController.getCarsModels();
    const carModelList = [...carsModels.data.data];
    //console.log(carModelList);
    //console.log(carModelList.length);
    const carsUser = await carsController.getCars();
    const carsUserList = [...carsUser.data.data];
    //console.log(carsUserList);
    //console.log(carsUserList.length);
    expect(carsUserList.length).toEqual(carModelList.length);
  });

  test("negative scenario - 1", async () => {
    const getCarModelByID = await carsController.getCarsModelsByID(24);
    expect(getCarModelByID).tobeFalsy;
  });

  test("negative scenario - 2", async () => {
    const createCarWithSpecificMileage = await carsController.createCar(
      1,
      1,
      -1
    );
    //console.log(createCarWithSpecificMileage.data);
    expect(createCarWithSpecificMileage.data.message).toBe(
      "Mileage has to be from 0 to 999999"
    );
  });

  test("negative scenario - 3", async () => {
    const createCarWithSpecificBrand = await carsController.createCar(10, 1, 1);
    //console.log(createCarWithSpecificBrand.data);
    expect(createCarWithSpecificBrand.data.message).toBe("Brand not found");
  });
});
