---
title: "RL Book Chapter 1 Exercises Solutions"
date: "2020-05-07"
author: "torayeff"
---

**Exercise 1.1: Self-Play**  
Suppose, instead of playing against a random opponent, the reinforcement learning algorithm described above played against itself, with both sides learning. 

**Q:** What do you think would happen in this case? Would it learn a different policy for selecting moves?  
**A:** The algorithm will continue to adapt until it reaches an equilibrium, which may be either fixed (always making the same moves), or cyclical (alternate between “good” moves and “bad” moves in such a way that the algorithm wins every game). Thus it would seem that the algorithm would not learn a min/max playing strategy.

---

**Exercise 1.2: Symmetries**
Many tic-tac-toe positions appear different but are really the same because of symmetries. 

**Q:** How might we amend the learning process described
above to take advantage of this? In what ways would this change improve the learning process?  
**A:** For tic-tac-toe it is possible to use 4 axis of symmetry to essentially fold the board down to a quarter of the size. This would dramatically increase the speed/reduce the memory required. By simplifying the state in such a way that the dimension decreases we can be more confident that our learned results will be statistically significant since the state space we operate in is reduced. 

**Q:** Now think again. Suppose the opponent did not take advantage of symmetries. In that case, should we? Is it true, then, that symmetrically equivalent positions should necessarily have the same value?  
**A:** If the opponent does not use symmetries then our algorithm
should not either since enforcing a symmetry on our opponent (that is not in fact there) should decrease our performance when playing against this type of opponent. For example, if the opponent always played correct except for 1 corner, then using symmetries would mean you never take advantage of that information. This means symmetrically equivalent positions don't always hold the same value in a multi-player game.

---

**Exercise 1.3: Greedy Play**  
Suppose the reinforcement learning player was greedy, that is, it always played the move that brought it to the position that it rated the best. 

**Q:** Might it learn to play better, or worse, than a nongreedy player? What problems might occur? \
**A:** Problems with direct greedy play would be that our player fails to be able to capture moves that result in improved rewards because we never take a chance on unknown (or unexplored) actions. The chance the correct action for a situation in the long run is the first one that returns a positive reward is pretty slim, particularly if there are a large number of actions available. It would also be unable to adapt to opponents that slowly altered behaviour over time.

---

**Exercise 1.4: Learning from Exploration**  
Suppose learning updates occurred after all moves, including exploratory moves. If the step-size parameter is appropriately reduced over time (but not the tendency to explore), then the state values would converge to a different set of probabilities.

**Q:** What (conceptually) are the two sets of probabilities computed when we do, and when we do not, learn from exploratory moves? Assuming that we do continue to make exploratory moves, which set of probabilities might be better to learn? Which would result in more wins?  
**A:** If we do not learn from exploratory moves then the state probabilities learned would effectively be random in that we are not updating our undertaking of what happens when in a given state and a given action is taken. If we learn from our exploratory moves then our
limiting probabilities should be those from the desired distribution of state and action selections. Obviously a more complete understanding of the probability densities should result in a better play since the player better understands the “game” he or she is playing.

---

**Exercise 1.5: Other Improvements**  
**Q:** Can you think of other ways to improve the reinforcement learning player? Can you think of any better way to solve the tic-tac-toe problem as posed?  
**A:** One possible way would be to have a saved library of scripted plays. For example the logic would be something like, when in a set of known states always execute the following moves. This is somewhat like the game of chess where there are various “opening” positions that expert players have deemed good. Hopefully this might expedite the total learning process or at least improve our reinforcement players initial play.

---

### References:
1. [iamhectorotero/rlai-exercises](https://github.com/iamhectorotero/rlai-exercises)
2. [ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)