import tasksRoutes from './tasks.js';

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('Bonjour monde !');
  });

  tasksRoutes(app, fs);
};

export default appRouter;
