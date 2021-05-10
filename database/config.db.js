const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.CNN_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("[Conectado a la base de datos]");
  } catch (error) {
    console.error(error);
    throw new Error(`Error al iniciar la base de datos`);
  }
};

module.exports = {
  dbConection,
};
