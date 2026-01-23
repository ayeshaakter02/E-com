const bdApi = require("../config/axios.config");

const getDivisionsController = async (req, res) => {
  try {
    const response = await bdApi.get("/divisions");
    res.status(200).json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load divisions",
    });
  }
};

const getDistrictsController = async (req, res) => {
  try {
    const { division } = req.query;
    const response = await bdApi.get(`/districts?division=${division}`);
    res.status(200).json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load districts",
    });
  }
};

const getUpazilasController = async (req, res) => {
  try {
    const { district } = req.query;
    const response = await bdApi.get(`/upazilas?district=${district}`);
    res.status(200).json({
      success: true,
      data: response.data.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load upazilas",
    });
  }
};

module.exports = {
  getDivisionsController,
  getDistrictsController,
  getUpazilasController,
};
