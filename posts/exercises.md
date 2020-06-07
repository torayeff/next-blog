# Exercises
**Exercise 1.1: Self-Play** \
Suppose, instead of playing against a random opponent, the reinforcement learning algorithm described above played against itself, with both sides learning. 

**Q:** What do you think would happen in this case? Would it learn a different policy for selecting moves? \
**A:** The algorithm will continue to adapt until it reaches an equilibrium, which may be either fixed (always making the same moves), or cyclical (alternate between “good” moves and “bad” moves in such a way that the algorithm wins every game). Thus it would seem that the algorithm would not learn a min/max playing strategy.

---

**Exercise 1.2: Symmetries** \
Many tic-tac-toe positions appear different but are really the same because of symmetries. 

**Q:** How might we amend the learning process described
above to take advantage of this? In what ways would this change improve the learning process? \
**A:** For tic-tac-toe it is possible to use 4 axis of symmetry to essentially fold the board down to a quarter of the size. This would dramatically increase the speed/reduce the memory required. By simplifying the state in such a way that the dimension decreases we can be more confident that our learned results will be statistically significant since the state space we operate in is reduced. 

**Q:** Now think again. Suppose the opponent did not take advantage of symmetries. In that case, should we? Is it true, then, that symmetrically equivalent positions should necessarily have the same value? \
**A:** If the opponent does not use symmetries then our algorithm
should not either since enforcing a symmetry on our opponent (that is not in fact there) should decrease our performance when playing against this type of opponent. For example, if the opponent always played correct except for 1 corner, then using symmetries would mean you never take advantage of that information. This means symmetrically equivalent positions don't always hold the same value in a multi-player game.

---

**Exercise 1.3: Greedy Play**\
Suppose the reinforcement learning player was greedy, that is, it always played the move that brought it to the position that it rated the best. 

**Q:** Might it learn to play better, or worse, than a nongreedy player? What problems might occur? \
**A:** Problems with direct greedy play would be that our player fails to be able to capture moves that result in improved rewards because we never take a chance on unknown (or unexplored) actions. The chance the correct action for a situation in the long run is the first one that returns a positive reward is pretty slim, particularly if there are a large number of actions available. It would also be unable to adapt to opponents that slowly altered behaviour over time.

---

**Exercise 1.4: Learning from Exploration**\
Suppose learning updates occurred after all moves, including exploratory moves. If the step-size parameter is appropriately reduced over time (but not the tendency to explore), then the state values would converge to a different set of probabilities.

**Q:** What (conceptually) are the two sets of probabilities computed when we do, and when we do not, learn from exploratory moves? Assuming that we do continue to make exploratory moves, which set of probabilities might be better to learn? Which would result in more wins?\
**A:** If we do not learn from exploratory moves then the state probabilities learned would effectively be random in that we are not updating our undertaking of what happens when in a given state and a given action is taken. If we learn from our exploratory moves then our
limiting probabilities should be those from the desired distribution of state and action selections. Obviously a more complete understanding of the probability densities should result in a better play since the player better understands the “game” he or she is playing.

---

**Exercise 1.5: Other Improvements**\
**Q:** Can you think of other ways to improve the reinforcement learning player? Can you think of any better way to solve the tic-tac-toe problem as posed?\
**A:** One possible way would be to have a saved library of scripted plays. For example the logic would be something like, when in a set of known states always execute the following moves. This is somewhat like the game of chess where there are various “opening” positions that expert players have deemed good. Hopefully this might expedite the total learning process or at least improve our reinforcement players initial play.

---

**Exercise 2.1:**\
**Q:** In $\epsilon$-greedy action selection, for the case of two actions and $\epsilon=0.5$, what is the probability that the greedy action is selected?\
**A:** 
$$
\begin{aligned}
P(\text{greedy}) &= P(\text{greedy}|\text{exploit})P(\text{exploit}) + P(\text{greedy}|\text{explore})P(\text{explore})\\ &= 1 * 0.5 + 0.5 * 0.5 \\
&= 0.75 
\end{aligned}
$$

---

**Exercise 2.2: Bandit example**\
Consider a $k$-armed bandit problem with $k=4$ actions,
denoted 1, 2, 3, and 4. Consider applying to this problem a bandit algorithm using $\epsilon$-greedy action selection, sample-average action-value estimates, and initial estimates
of $Q_1(a) = 0$, for all $a$. Suppose the initial sequence of actions and rewards is $A_1 = 1$, $R_1 = -1$, $A_2 = 2$, $R_2 = 1$, $A_3 = 2$, $R_3 = -2$, $A_4 = 2$, $R_4 = 2$, $A_5 = 3$, $R_5 = 0$. On some of these time steps the $\epsilon$ case may have occurred, causing an action to be selected at random.

**Q:** On which time steps did this definitely occur? On which time steps could this possibly have occurred?\
**A:** Let's build a table for $Q_t(a)$ for each time step $t$:

|      |$a=1$      |$a=2$     |$a=3$     |$a=4$     |
|:----:|:---------:|:--------:|:--------:|:--------:|
|$t=1$ |$0.00$     |$0.00$    |$0.00$    |$0.00$    |
|$t=2$ |$-1.00$    |$0.00$    |$0.00$    |$0.00$    |
|$t=3$ |$-1.00$    |$1.00$    |$0.00$    |$0.00$    |
|$t=4$ |$-1.00$    |$-0.50$   |$0.00$    |$0.00$    |
|$t=5$ |$-1.00$    |$0.33$    |$0.00$    |$0.00$    |

- $A_1 = 1$: random selection or greedy selection.
- $A_2 = 2$: random selection or greedy selection.
- $A_3 = 2$: random selection or greedy selection.
- $A_4 = 2$: definitely non-greedy selection (exploration).
- $A_5 = 3$: definitely non-greedy selection (exploration).

---

**Exercise 2.3:**\
**Q:** In the comparison shown in Figure 2.2, which method will perform best in the long run in terms of cumulative reward and probability of selecting the best action? How much better will it be? Express your answer quantitatively. 
**A:** 
The $\epsilon = 0.01$ method will perform the best in the long run. This is because – assuming stationarity – it is guaranteed to find the optimal action and then exploit it. Once the algorithm has found the optimal action, it will exploit it 99% of the time, while the $\epsilon = 0.1$ will only exploit the optimal action 90% of the time.

Let’s say that the average $Q$ value of suboptimal values is $\bar{q}_s$. Then we know that:
- $\epsilon=0.01$ will have an average reward of $0.01 * \bar{q}_s + 0.99 * q_{opt}$
- $\epsilon=0.1$ will have an average reward of $0.1 * \bar{q}_s + 0.90 * q_{opt}$

[Credits to Micah Carroll](https://micahcarroll.github.io/learning/2018/05/17/sutton-and-barto-rl.html)

---

**Exercise 2.4:**\
If the step-size parameters, $\alpha_n$, are not constant, then the estimate $Q_n$ is a weighted average of previously received rewards with a weighting different from that given by (2.6). 

**Q:** What is the weighting on each prior reward for the general case, analogous to (2.6), in terms of the sequence of step-size parameters?\
**A:**

$$
\begin{aligned}
    Q_{n+1} &= Q_n + \alpha_n[R_n - Q_n] \\
    &= (1 - \alpha_n)Q_n + \alpha_nR_n \\
    &= (1 - \alpha_n)\Big( (1 - \alpha_{n-1})Q_{n-1} + \alpha_{n-1}R_{n-1} \Big) + \alpha_nR_n \\
    &= (1 - \alpha_n)(1 - \alpha_{n-1})Q_n + (1 - \alpha_n)\alpha_{n-1}R_{n-1} + \alpha_nR_n \\
    &= Q_1\prod_{i=1}^{n}(1 - \alpha_i) + \sum_{i=1}^{n}\alpha_iR_i\Big[\prod_{j=i+1}^{n}(1 - \alpha_j)\Big]
\end{aligned}
$$
