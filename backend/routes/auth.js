// backend/routes/auth.js
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ error: 'User not found' });
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });
  
      const token = jwt.sign({ id: user._id, role: user.role }, 'your_secret_key');
      res.status(200).json({ token, role: user.role });
    } catch (error) {
      res.status(500).json({ error: 'Failed to login' });
    }
  });