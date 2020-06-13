---
title: "RL Book Chapter 2 Exercises Solutions"
date: "2020-05-08"
author: "torayeff"
---

**Exercise 2.1:**  
**Q:** In $\epsilon$-greedy action selection, for the case of two actions and $\epsilon=0.5$, what is the probability that the greedy action is selected?  
**A:** 
$$
\begin{aligned}
P(\text{greedy}) &= P(\text{greedy}|\text{exploit})P(\text{exploit}) + P(\text{greedy}|\text{explore})P(\text{explore})\\ &= 1 * 0.5 + 0.5 * 0.5 \\
&= 0.75 
\end{aligned}
$$

---

**Exercise 2.2: Bandit example**  
Consider a $k$-armed bandit problem with $k=4$ actions,
denoted 1, 2, 3, and 4. Consider applying to this problem a bandit algorithm using $\epsilon$-greedy action selection, sample-average action-value estimates, and initial estimates
of $Q_1(a) = 0$, for all $a$. Suppose the initial sequence of actions and rewards is $A_1 = 1$, $R_1 = -1$, $A_2 = 2$, $R_2 = 1$, $A_3 = 2$, $R_3 = -2$, $A_4 = 2$, $R_4 = 2$, $A_5 = 3$, $R_5 = 0$. On some of these time steps the $\epsilon$ case may have occurred, causing an action to be selected at random.

**Q:** On which time steps did this definitely occur? On which time steps could this possibly have occurred?  
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

**Exercise 2.3:**  
**Q:** In the comparison shown in Figure 2.2, which method will perform best in the long run in terms of cumulative reward and probability of selecting the best action? How much better will it be? Express your answer quantitatively. 
**A:** 
The $\epsilon = 0.01$ method will perform the best in the long run. This is because – assuming stationarity – it is guaranteed to find the optimal action and then exploit it. Once the algorithm has found the optimal action, it will exploit it 99% of the time, while the $\epsilon = 0.1$ will only exploit the optimal action 90% of the time.

Let’s say that the average $Q$ value of suboptimal values is $\bar{q}_s$. Then we know that:
- $\epsilon=0.01$ will have an average reward of $0.01 * \bar{q}_s + 0.99 * q_{opt}$
- $\epsilon=0.1$ will have an average reward of $0.1 * \bar{q}_s + 0.90 * q_{opt}$

[Credits to Micah Carroll](https://micahcarroll.github.io/learning/2018/05/17/sutton-and-barto-rl.html)

---

**Exercise 2.4:**  
If the step-size parameters, $\alpha_n$, are not constant, then the estimate $Q_n$ is a weighted average of previously received rewards with a weighting different from that given by (2.6). 

**Q:** What is the weighting on each prior reward for the general case, analogous to (2.6), in terms of the sequence of step-size parameters?  
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