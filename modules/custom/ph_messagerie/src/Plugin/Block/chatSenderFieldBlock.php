<?php
/**
 * Created by PhpStorm.
 * User: Mariem
 * Date: 29/01/2019
 * Time: 09:27
 */

namespace Drupal\ph_messagerie\Plugin\Block;

//use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a chat sender form Block.
 *
 * @Block(
 *  id = "chat_sender_form_block",
 *  admin_label = @Translation("chat sender form Block"),
 * )
 */
class chatSenderFieldBlock extends BlockBase
{

  public function build()
  {
    $form = \Drupal::formBuilder()->getForm('Drupal\ph_messagerie\Form\chatForm');

      return $form;
  }
}
