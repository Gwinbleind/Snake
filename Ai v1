import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
import java.util.Random;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.Timer;

public class SnakeGame extends JPanel implements ActionListener, KeyListener {
    
    private static final long serialVersionUID = 1L;
    private static final int WIDTH = 500;
    private static final int HEIGHT = 500;
    private static final int DOT_SIZE = 10;
    private static final int ALL_DOTS = 900;
    private static final int RAND_POS = 29;
    private static final int DELAY = 140;
    
    private final int[] x = new int[ALL_DOTS];
    private final int[] y = new int[ALL_DOTS];
    
    private int dots;
    private int apple_x;
    private int apple_y;
    private int score = 0;
    private boolean inGame = true;
    private boolean isPaused = false;
    private boolean isNewGame = true;
    
    private Timer timer;
    private JLabel scoreLabel;
    
    private JMenuBar menuBar;
    private JMenu gameMenu;
    private JMenuItem newGameItem;
    private JMenuItem continueItem;
    private JMenuItem exitItem;
    
    public SnakeGame() {
        addKeyListener(this);
        setBackground(Color.black);
        setFocusable(true);
        
        setPreferredSize(new Dimension(WIDTH, HEIGHT));
        initGame();
        initMenu();
        
        timer = new Timer(DELAY, this);
        timer.start();
    }
    
    private void initGame() {
        dots = 3;
        for (int z = 0; z < dots; z++) {
            x[z] = 50 - z * DOT_SIZE;
            y[z] = 50;
        }
        
        generateApple();
    }
    
    private void initMenu() {
        menuBar = new JMenuBar();
        
        gameMenu = new JMenu("Игра");
        gameMenu.setMnemonic(KeyEvent.VK_G);
        
        newGameItem = new JMenuItem("Новая игра", KeyEvent.VK_N);
        newGameItem.addActionListener(new ActionListener() {
            
            @Override
            public void actionPerformed(ActionEvent e) {
                isNewGame = true;
                initGame();
                score = 0;
                scoreLabel.setText("Очки: " + score);
            }
        });
        
        continueItem = new JMenuItem("Продолжить", KeyEvent.VK_P);
        continueItem.addActionListener(new ActionListener() {
            
            @Override
            public void actionPerformed(ActionEvent e) {
                isPaused = false;
            }
        });
        
        exitItem = new JMenuItem("Выход", KeyEvent.VK_E);
        exitItem.addActionListener(new ActionListener() {
            
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
        
        gameMenu.add(newGameItem);
        gameMenu.add(continueItem);
        gameMenu.add(exitItem);
        menuBar.add(gameMenu);
        
        scoreLabel = new JLabel("Очки: " + score);
        scoreLabel.setFont(new Font("Serif", Font.BOLD, 18));
        scoreLabel.setForeground(Color.white);
        menuBar.add(scoreLabel);
        
        JFrame frame = new JFrame("Змейка");
        frame.setDefaultCloseOperation(JFrame.EXIT    );
    frame.setResizable(false);
    frame.setJMenuBar(menuBar);
    frame.add(this);
    frame.pack();
    frame.setLocationRelativeTo(null);
    frame.setVisible(true);
}

private void generateApple() {
    Random rand = new Random();
    apple_x = rand.nextInt(RAND_POS) * DOT_SIZE;
    apple_y = rand.nextInt(RAND_POS) * DOT_SIZE;
}

private void move() {
    for (int z = dots; z > 0; z--) {
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }
    
    if (leftDirection) {
        x[0] -= DOT_SIZE;
    }
    if (rightDirection) {
        x[0] += DOT_SIZE;
    }
    if (upDirection) {
        y[0] -= DOT_SIZE;
    }
    if (downDirection) {
        y[0] += DOT_SIZE;
    }
}

private void checkCollision() {
    for (int z = dots; z > 0; z--) {
        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }
    }
    
    if (y[0] >= HEIGHT) {
        inGame = false;
    }
    
    if (y[0] < 0) {
        inGame = false;
    }
    
    if (x[0] >= WIDTH) {
        inGame = false;
    }
    
    if (x[0] < 0) {
        inGame = false;
    }
    
    if (!inGame) {
        timer.stop();
    }
}

private void checkApple() {
    if ((x[0] == apple_x) && (y[0] == apple_y)) {
        dots++;
        score++;
        scoreLabel.setText("Очки: " + score);
        generateApple();
    }
}

private void drawApple(Graphics g) {
    g.setColor(Color.red);
    g.fillOval(apple_x, apple_y, DOT_SIZE, DOT_SIZE);
}

private void drawSnake(Graphics g) {
    for (int z = 0; z < dots; z++) {
        if (z == 0) {
            g.setColor(Color.green);
        } else {
            g.setColor(Color.white);
        }
        g.fillRect(x[z], y[z], DOT_SIZE, DOT_SIZE);
    }
}

@Override
public void paintComponent(Graphics g) {
    super.paintComponent(g);
    if (inGame) {
        drawApple(g);
        drawSnake(g);
    } else {
        gameOver(g);
    }
}

private void gameOver(Graphics g) {
    String message = "Игра окончена. Очки: " + score;
    Font font = new Font("Serif", Font.BOLD, 18);
    Font smallFont = new Font("Serif", Font.BOLD, 14);
    g.setColor(Color.white);
    g.setFont(font);
    g.drawString(message, (WIDTH - g.getFontMetrics().stringWidth(message)) / 2, HEIGHT / 2);
    g.setFont(smallFont);
    g.drawString("Нажмите клавишу Enter, чтобы начать новую игру", (WIDTH - g.getFontMetrics().stringWidth("Нажмите клавишу Enter, чтобы начать новую игру")) / 2, HEIGHT / 2 + 20);
}

private boolean leftDirection = false;
private boolean rightDirection = true;

private boolean upDirection = false;

private boolean downDirection = false;

private boolean inGame = true;

private int dots = 3;

private int apple_x;

private int apple_y;

private int[] x = new int[MAX_DOTS];

private int[] y = new int[MAX_DOTS];

private Timer timer;

private int score = 0;

private JLabel scoreLabel; 

public static void main(String[] args) {

    EventQueue.invokeLater(() -> {

        Snake game = new Snake();

        game.initUI();

    });

}
} 
