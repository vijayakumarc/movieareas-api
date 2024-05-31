export const MovieIndex = (req, res) => {
  res.send("Get all movies");
};

export const MoiveCreate = (req,res) => {
    res.send('Create all movies')
}
export const MoiveUpdate = (req,res) => {
    res.send('Update movie')
}

export const MoiveDelete = (req,res) => {
    res.send('Delete movie')
}
